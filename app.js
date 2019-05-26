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
    response.send(`This is our page for lab 1.`);
})

app.get(`/contact`, (request, response) =>
{
    response.send(`Group;</br>
        Brody - Favourite Language is Java. Wants to make games.</br>
        Nick - Likes to draw. `);
})

app.listen(4000, () =>
{
    //console.log(`Listening on port 4000.`);
});


