const { Blague } = require("../models"); // Assuming you have a User model defined

exports.createBlague = async (req, res) => {
  try {
    const blague = await Blague.create(req.body);
    res.status(201).json(blague);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBlagues = async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    res.status(200).json(blagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlagueById = async (req, res) => {
  try {
    const blague = await Blague.findByPk(req.params.id);
    if (blague) {
      res.status(200).json(blague);
    } else {
      res.status(404).json({ error: "Blague not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRandomBlague = async (req, res) => {
  try {
    const count = await Blague.count();
    if (count === 0) {
      return res.status(404).json({ error: "No blagues found" });
    }
    const randomIndex = Math.floor(Math.random() * count);
    const blague = await Blague.findOne({ offset: randomIndex });
    res.status(200).json(blague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
