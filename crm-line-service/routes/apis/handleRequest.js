const fetch = require("node-fetch")
const config = requireSrc("config")

const handleRequest = async (url, method, data) => {
    const newHeaders = {
      "Content-Type": "application/json",
      database: config.database,
      Authorization: config.basicAuth,
    }
    const newBody = data || {}
    const newMethod = method || "GET"
    try {
      let response
      if (method !== "GET") {
        response = await fetch(url, {
          method: newMethod,
          headers: newHeaders,
          body: JSON.stringify(newBody),
          redirect: "follow",
        })
      } else {
        response = await fetch(url, {
          method: newMethod,
          headers: newHeaders,
        })
      }
      const json = response.json()
      return json
    } catch (error) {
      return error
    }
  }
  
  const getRequestApi = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          database: config.database,
          Authorization: config.basicAuth,
        },
      })
      const json = response.json()
      return json
    } catch (error) {
      return error
    }
  }

  module.exports = {
    handleRequest,
    getRequestApi,
  }
