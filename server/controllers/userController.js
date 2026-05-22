


const loginUser = (req, res ) => { 
    try {
        console.log(req.body);
        res.status(200).json({message : "User Logged inn.."})
    } catch (error) {
        res.status(500).json({message : "Internal Server Error!"});
    }
}

const registerUser = (req, res) => { 
    try {
        
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = { loginUser , registerUser}