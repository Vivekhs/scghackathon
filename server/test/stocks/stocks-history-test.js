process.env.NODE_ENV = 'test';
 
 
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app.js');
let should = chai.should();
let expect = chai.expect;
 
chai.use(chaiHttp);

describe('fetch stocks history', () => {
    describe('Pagination : Fetch previous records', () => {
        it('it should return first n records', (done)=>{
            chai.request(server)
                .get('/stocks/0/0/10')
                .end((err, res)=>{
                    res.should.have.status(200);
                    expect(res.body.length).equal(10);
                    done();
                })
        })
    });
    describe('fetch companies list', () => {
        it('it should return array of string having company names', () => {
            chai.request(server)
                .get('/stocks/companies')
                .end((err, res)=>{
                    res.should.have.status(200);
                    expect(res.body.length).greaterThan(0);
                    done();
                })
        })
    });
    describe('fetch top performers', () => {
        it('it should return top performers list', () => {
            chai.request(server)
                .get('/stocks/top_performers')
                .end((err, res)=>{
                    res.should.have.status(200);
                    expect(res.body.length).greaterThan(0);
                    done();
                })
        })
    });
});

