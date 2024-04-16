const express = require('express');
const path = require('path'); // Importe le module "path"
const fs = require('fs');

const app = express();
const port = 3000;


app.get('/', (req, res)=> {
    const documentation = `
        <h1>Isaac Helper API Documentation</h1>
        <p>Welcome to the Isaac Helper API! Here are the available endpoints:</p>
        <ul>
            <li><strong>/treasure</strong>: Get data about treasure room items.</li>
            <li><strong>/curse</strong>: Get data about curse room items.</li>
            <li><strong>/secret</strong>: Get data about secret room items.</li>
            <li><strong>/shop</strong>: Get data about shop items.</li>
            <li><strong>/boss</strong>: Get data about boss room items.</li>
            <li><strong>/devil</strong>: Get data about devil room items.</li>
            <li><strong>/angel</strong>: Get data about angel room items.</li>
            <li><strong>/library</strong>: Get data about library items.</li>
            <li><strong>/planetarium</strong>: Get data about planetarium items.</li>
            <li><strong>/golden_chest</strong>: Get data about golden chest items.</li>
            <li><strong>/red_chest</strong>: Get data about red chest items.</li>
            <li><strong>/trinkets</strong>: Get data about trinket items.</li>
            <li><strong>/pickups</strong>: Get data about secret room items.</li>
        </ul>
    `;
    res.send(documentation);
});

// Indique à Express d'utiliser le dossier 'img' pour servir des fichiers statiques
app.use('/img', express.static('img'));

//Routes pour treasure_room
app.get('/treasure', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'item_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour curse_room
app.get('/curse', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'curse_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour secret_room
app.get('/secret', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'secret_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour shop_room
app.get('/shop', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'shop_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour boss_room
app.get('/boss', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'boss_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour devil_room
app.get('/devil', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'devil_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour angel_room
app.get('/angel', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'angel_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour library
app.get('/library', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'library_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour planetarium
app.get('/planetarium', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'planetarium_room.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour golden_chest
app.get('/golden_chest', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'golden_chest.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour red_chest
app.get('/red_chest', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'red_chest.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour trinkets
app.get('/trinkets', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'trinkets.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Routes pour pickups
app.get('/pickups', (req, res) => {
    const filePath = path.join(__dirname, 'DB', 'pickups.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier', err);
            res.status(500).send('Erreur lors de la lecture du fichier');
            return;
        }
        res.json(JSON.parse(data));
    });
});

////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}`);
});