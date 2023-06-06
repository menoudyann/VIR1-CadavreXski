/**
 * @file      phrase.test.js
 * @brief     This class is designed to test the behaviour of the phrase controller.
 * @author    Created by Menoud Yann
 * @version   30-03-2023 - original (dedicated to RIA1)
 * @version   30-03-2023 - update
 */

const request = require("supertest");
const { app } = require("../app");

test("test the root path", async () => {
  const response = await request(app).get("/api/v1/phrases");
  expect(response.statusCode).toBe(200);
});

test("test the store phrase method", async () => {
  myTestPhrase = 'My test phrase';
  const response = await request(app)
    .post("/api/v1/phrases")
    .send({phrase: 'My test phrase'});
    expect(response.body).toHaveProperty("phrase", myTestPhrase);
});

test("test the destroy all phrases method", async () => { 
  const response = await request(app)
  .delete("/api/v1/phrases/destroy");
  expect(response.body).toHaveProperty("phrase", "All phrases deleted");
});