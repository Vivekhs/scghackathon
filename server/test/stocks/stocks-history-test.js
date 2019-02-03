process.env.NODE_ENV = 'test';
 
 
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app.js');
let should = chai.should();
let expect = chai.expect;
 
chai.use(chaiHttp);

describe('Fetch Stocks History', () => {
    describe('Pagination : Fetch previous records', () => {
        it(' It should return first n records', (done)=>{
            chai.request(server)
                .get('/stocks/0/0/10/null')
                .end((err, res)=>{
                    res.should.have.status(200);
                    expect(res.body.length).equal(10);
                    done();
                })
        })
    });
});

describe('Fetch companies list', () => {
    
});