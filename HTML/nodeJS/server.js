// server.js
const express = require('express')
const app = express();
const PORT = 3000; //choose a port
// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true}));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define item prices
const itemPrices = {
    "Crispy Chicken Nuggets": 7.99,
    "Roasted Arrabbiata Pasta": 11.99,
    "Chickpea Medley": 13.99
};

// Get request to serve the order form

app.get('/',(req, res) => {
    res.sendFile(__dirname + "/Food_Form_CC.html");
});

// POST request to handle form submission
app.post('/submit',(req, res) => {
    // Assuming form has fields 'quantitynum', 'types', 'specialInstructions', 'email'
    const { quantitynum, types, specialInstructions, email} = req.body;

    // Check if required fields are missing
    if (!quantitynum || !types) {
        return res.status(400).send("Missing required fields");
    }

    // Parse quantity into an integer
    const quantity = parseInt(quantitynum);
    if (isNaN(quantity)) {
        return res.status(400).send("Invalid quantity");
    }

    // Check if the selected item exists in itemPrices
    const pricePerItem = itemPrices[types];
    if (pricePerItem === undefined) {
        return res.status(400).send("Invalid item type");
    }

    // Calculate total
    const total = pricePerItem * quantity;
    console.log('Total:', total);

    // Send total and item type in the response
    res.redirect(`/order_confirmation.html?total=${total}&type=${types}`);
});



// Server listening
app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000}');
});
