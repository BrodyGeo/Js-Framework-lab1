/* Set up express */
const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => 
{
    response.send(`About - /about 
        </br>Contact - /contact`);
});

app.get(`/about`, (request, response) =>
{
    response.send(`This is our page for lab 1.</br>
        `);
})

app.get(`/contact`, (request, response) =>
{
    response.send(`Group;</br>
        Brody - Favourite Language is Java. Wants to make games.</br>
        Nick - Likes to draw. `);
})

const port = process.env.PORT || 4000;
app.listen(port, () =>
{
    console.log(`Listening on port ${port}.`);
});


