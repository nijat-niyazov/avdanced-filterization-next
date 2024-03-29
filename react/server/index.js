const express = require("express");
const cors = require("cors");
const { isNil } = require("lodash");
const data = require("./data");
const en = require("./message/en");
const tr = require("./message/tr");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function containsColors(colors, product) {
  // base case, do not skip products when there are no color filters
  if (!colors) return true;

  const selectedColors = new Set(colors.split(","));
  const productColors = product.color;

  // check if any of the product colors are in the filter
  for (const color of productColors) {
    if (selectedColors.has(color)) {
      return true;
    }
  }

  // does not contain any of the filtered colors, skip this product
  return false;
}

function applyFilters(products, { query, sort, colors, minPrice, maxPrice }) {
  const filteredProducts = [];

  // skip products based on filters
  for (const product of products) {
    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      continue;
    }

    if (!containsColors(colors, product)) {
      continue;
    }

    if (!isNil(minPrice) && product.price / 100 < minPrice) {
      continue;
    }

    if (!isNil(maxPrice) && product.price / 100 > maxPrice) {
      continue;
    }

    filteredProducts.push(product);
  }

  return filteredProducts.sort((a, b) => {
    const { name, price, visited } = a;
    const { name: nameB, price: priceB, visited: visitedB } = b;

    switch (sort) {
      case "priceDesc":
        return priceB - price;
      case "priceAsc":
        return price - priceB;
      case "lessPopular":
        return visited - visitedB;
      case "mostPopular":
        return visitedB - visited;
      default:
        return name.localeCompare(nameB);
    }
  });
}

app.get("/items", (req, res) => {
  // compute the max price for the filter
  console.log("req.query", req.query);
  const maxPrice = Math.round(Math.max(...data.map((product) => product.price)));

  // fake the request to a backend search service like solr or elasticsearch
  setTimeout(() => {
    res.json({ data: applyFilters(data, req.query), maxPrice });
  }, 250);
});

app.get("/translation", (req, res) => {
  const translationData = req.query.lang === "tr" ? tr : en;

  res.json({ data: translationData });
});

app.listen(3001, () => {
  console.info("server listening on: 3001");
});
