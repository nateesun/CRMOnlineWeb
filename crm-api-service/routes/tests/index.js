const chai = require("chai")
const chaiHttp = require("chai-http")

const server = require("../../app")

chai.use(chaiHttp)
chai.should()

describe("GET /api/", () => {
  it("it should have message OK", (done) => {
    chai
      .request(server)
      .get("/api/")
      .set("Authorization", "Basic YWRtaW46c29mdHBvczIwMTM=")
      .end((e, res) => {
        res.should.have.status(200)
        done()
      })
  })

  it("it should have message OK", (done) => {
    chai
      .request(server)
      .get("/api/version")
      .set("Authorization", "Basic YWRtaW46c29mdHBvczIwMTM=")
      .end((e, res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.should.have.property("message").eql("1.0.0")
        done()
      })
  })
})
