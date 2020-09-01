const chai = require("chai")
const chaiHttp = require("chai-http")
const { after, before, describe, it } = require("mocha")

const server = require("../app")

chai.use(chaiHttp)
chai.should()

describe("Testing unit 1", () => {
  before((done) => {
    // Do something here before test
    done()
  })

  describe("GET /api/version", () => {
    it("it should have message OK", (done) => {
      chai
        .request(server)
        .get("/api/version")
        .set("Authorization", "Basic YWRtaW46c29mdHBvczIwMTM=")
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.have.property("message").eql("1.0.0")
          done()
        })
    })
  })

  after((done) => {
    // Do something here after test
    done()
  })
})
