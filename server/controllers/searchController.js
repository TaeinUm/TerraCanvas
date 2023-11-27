const Post = require('../models/Post');

exports.searchMapByUserName = async (req, res) => {
    try {
        
        //const {userId} = req.query;
        const userId = req.params.userIden;
        
        const maps = await Post.find({ 
            userId: userId,
            postType: "map"
        });
        for(let map in maps){
            console.log("What is the JSON: "+JSON.stringify(maps[map]));
        }
        res.json(maps);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get questions by search text
exports.searchQuestionByText = async (req, res) => {
    try {
        const searchText = req.params.searchText;
        const questions = await Post.find({ 
            postName: { "$regex": searchText, "$options": "i" },
            postType: "question"
        });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get ideas by search text
exports.searchIdeaByText = async (req, res) => {
    try {
        const searchText = req.params.searchText;
        const ideas = await Post.find({ 
            postName: { "$regex": searchText, "$options": "i" },
            postType: "idea"
        });
        res.json(ideas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get maps by search text
exports.searchMapByText = async (req, res) => {
    try {
        const searchText = req.params.searchText;
        const maps = await Post.find({ 
            postName: { "$regex": searchText, "$options": "i" },
            postType: "map"
        });
        res.json(maps);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};