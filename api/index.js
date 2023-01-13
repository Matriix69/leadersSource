const app = require("express")();
const axios = require("axios").default;
const cors = require("cors");

app.use(cors());

app.get("/api", async (req, res) => {
    try {
        const { data } = await axios.get("https://wakatime.com/api/v1/leaders");
        res.status(200).json({ ...data, success: true });
    } catch (error) {
        res.status(400).json({ data: null, success: false, msg: "request could not be processed" });
    }
});

module.exports = app;
