import express from "express";
import compressionMiddleware from "compression";
import markoMiddleware from "@marko/express";
import indexPage from "./pages/index";
import goodsService from "./services/goods";
import navService from "./services/nav";
import pageMetaService from "./services/page-meta";
import breadcrumbsService from "./services/breadcrumbs";
import pageTextService from "./services/page-text";

const port = parseInt(process.env.PORT || 3000, 10);

express()
    .use(compressionMiddleware()) // Enable gzip compression for all HTTP responses.
    .use("/assets", express.static("dist/assets")) // Serve assets generated from webpack.
    .use(markoMiddleware()) // Enables res.marko.
    .get("/", indexPage)
    .get("/services/goods", goodsService)
    .get("/services/nav", navService)
    .get("/services/page-meta", pageMetaService)
    .get("/services/breadcrumbs", breadcrumbsService)
    .get("/services/page-text", pageTextService)
    .listen(port, err => {
        if (err) {
            throw err;
        }

        if (port) {
            console.log(`Listening on port ${port}`);
        }
    });
