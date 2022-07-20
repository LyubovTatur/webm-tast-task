import express from "express";
import compressionMiddleware from "compression";
import markoMiddleware from "@marko/express";
import indexPage from "./pages/index";
// import usersService from "./services/users";
import goodsService from "./services/goods";
import navService from "./services/nav";
import pageMetaService from "./services/page-meta";
import breadcrumbsService from "./services/breadcrumbs";
import pageTextService from "./services/page-text";

const cool = require('cool-ascii-faces');
const path = require('path');
const PORT = process.env.PORT || 5000;



express()
    .use(compressionMiddleware()) // Enable gzip compression for all HTTP responses.
    .use("/assets", express.static("dist/assets")) // Serve assets generated from webpack.
    .use(express.static(path.join(__dirname, 'public')))
    .use(markoMiddleware()) // Enables res.marko.
    .get("/", indexPage)
    .get("/services/goods", goodsService)
    .get("/services/nav", navService)
    .get("/services/page-meta", pageMetaService)
    .get("/services/breadcrumbs", breadcrumbsService)
    .get("/services/page-text", pageTextService)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, err => {
        if (err) {
            throw err;
        }

        if (PORT) {
            console.log(`Listening on port ${PORT}`);
        }
    });
