import React, { useEffect, useState, useRef, useContext } from "react";
import * as mapboxgl from "mapbox-gl";
import {
  Tab,
  Tabs,
  Box,
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import * as XLSX from "xlsx";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Memo from "../Memo";
import { MapContext } from "../../../../contexts/MapContext";
import { AuthContext } from "../../../../contexts/AuthContext";
import mapServiceAPI from "../../../../api/mapServiceAPI";

import ShareTab from "../ShareTab";
import SaveTab from "../SaveTab";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5c3VkZnlyIiwiYSI6ImNsb3dxa2hiZjAyb2Mya3Fmb3Znd2k4b3EifQ.36cU7lvMqTDdgy--bqDV-A";

const ThreeD = () => {
  const [map, setMap] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainer = useRef(null);
  const fileInputRef = useRef(null);
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/light-v11");

  const { mapId } = useContext(MapContext);
  const { userId, username } = useContext(AuthContext);
  const [initialLayers, setInitializeLayers] = useState(null);
  const [mapLayer, setMapLayer] = useState(null);

  const [tabValue, setTabValue] = useState("1");
  const [mapJson, setMapJson] = useState({});
  const [isMemoVisible, setIsMemoVisible] = useState(false);
  const [memoContent, setMemoContent] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleJsonChange = (json) => {
    setMapJson(json.jsObject);
  };

  const saveJson = () => {
    try {
      map.setStyle(mapJson);
      alert("Successfully saved!");
    } catch (error) {
      alert("Invalid JSON!");
    }
  };

  const toggleMemo = () => {
    setIsMemoVisible(!isMemoVisible);
  };

  const handleMemoSave = () => {
    console.log("Memo saved:", memoContent);
    // Memo save logic here...
  };

  useEffect(() => {
    if (!map) {
      const newMap = new mapboxgl.Map({
        container: "map",
        style: mapStyle,
        center: [-74.006, 40.7128],
        zoom: 4,
        pitch: 45,
        bearing: -17.6,
        antialias: true,
      });

      newMap.on("load", async () => {
        newMap.addSource("3d-data", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        });

        newMap.addLayer({
          id: "3d-bars",
          type: "fill-extrusion",
          source: "3d-data",
          paint: {
            "fill-extrusion-color": "blue",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": 0,
            "fill-extrusion-opacity": 0.6,
          },
        });

        if (mapId) {
          try {
            const data = await mapServiceAPI.getMapGraphicData(
              userId,
              username,
              mapId
            );
            const mapLayer = data.mapLayer;

            if (mapLayer && data.mapType) {
              newMap.addLayer(mapLayer);
            } else {
              console.error("Invalid map layer data");
            }
          } catch (error) {
            console.error("Error loading map graphics: ", error);
          }
        }

        setMap(newMap);
        const initialLayers = newMap.getStyle().layers.map((layer) => layer.id);
        setInitializeLayers(initialLayers);
        setIsMapLoaded(true);
      });
    }
    if (map) {
      const currentLayers = map.getStyle().layers;
      const addedLayers = currentLayers.filter(
        (layer) => !initialLayers.includes(layer.id)
      );
      const addedLayersJson = JSON.stringify(addedLayers, null, 2);
      setMapLayer(addedLayersJson);
    }
  }, [map, mapStyle]);

  const handleFileInputChange = (e) => {
    if (!isMapLoaded) {
      alert("Map is still loading. Please wait.");
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const locations = XLSX.utils.sheet_to_json(worksheet);

        const features = locations.map((location) => {
          const height = location.value * 5;
          const deltaLon = 0.05;
          const deltaLat = 0.05;

          const coordinates = [
            [location.longitude - deltaLon, location.latitude - deltaLat],
            [location.longitude + deltaLon, location.latitude - deltaLat],
            [location.longitude + deltaLon, location.latitude + deltaLat],
            [location.longitude - deltaLon, location.latitude + deltaLat],
            [location.longitude - deltaLon, location.latitude - deltaLat],
          ];

          return {
            type: "Feature",
            properties: {
              height: height,
            },
            geometry: {
              type: "Polygon",
              coordinates: [coordinates],
            },
          };
        });

        const geojsonData = {
          type: "FeatureCollection",
          features,
        };

        if (map && map.getSource("3d-data")) {
          map.getSource("3d-data").setData(geojsonData);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleSave = async (title, version, privacy, mapLayer) => {
    try {
      await mapServiceAPI.addMapGraphics(
        userId,
        username,
        mapId, // This could be null if creating a new map
        title,
        version,
        privacy,
        "3D-Bar Map",
        mapLayer
      );
      alert("Map saved successfully");
    } catch (error) {
      console.error("Error saving map:", error);
      alert("Error saving map");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <div
        id="map"
        ref={mapContainer}
        style={{ width: "100%", height: "100%" }}
      />
      {!isMapLoaded && (
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <CircularProgress />
        </div>
      )}
      <Box sx={{ width: "40%" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="fullWidth"
              value={tabValue}
              onChange={handleTabChange}
              aria-label="map tabs"
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab
                label="Styles"
                value="1"
                sx={{ backgroundColor: "#282c34", color: "#fafafa" }}
              />
              {/* <Tab
                label="Share"
                value="2"
                sx={{ backgroundColor: "#282c34", color: "#fafafa" }}
      />*/}
              <Tab
                label="Save"
                value="3"
                sx={{ backgroundColor: "#282c34", color: "#fafafa" }}
              />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Container>
              <Typography sx={{ color: "#fafafa", marginBottom: "30px" }}>
                Choose an excel file that contains 'latitude,' 'longitude,'
                'name,' and 'value' columns
              </Typography>
              <input
                type="file"
                accept=".xlsx"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => fileInputRef.current.click()}
                style={{ marginBottom: "10px" }}
                sx={{ backgroundColor: "#fafafa", color: "black" }}
              >
                Select Data File
              </Button>
            </Container>
          </TabPanel>
          {/*<TabPanel value="2">
            <ShareTab />
          </TabPanel>/>*/}
          <TabPanel value="3">
            <SaveTab onSave={handleSave} mapLayer={mapLayer} />
          </TabPanel>
          {/*{isMemoVisible && <Memo mapId={""} />}
          <Button
            sx={{
              width: "100%",
              height: "20px",
              borderRadius: "0",
              backgroundColor: "grey",
            }}
            onClick={toggleMemo}
          >
            {isMemoVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button> */}
        </TabContext>
      </Box>
    </Box>
  );
};

export default ThreeD;
