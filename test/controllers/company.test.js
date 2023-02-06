const companyController = require('../../src/controllers/company');
const companyService = require('../../src/services/company');
describe('Todo Controller', () => {
  it('should save the company details to database', async () => {
    jest.spyOn(companyService, 'addCompany').mockResolvedValue(
      {
        id: 1,
      }
    );
    const mockReq = {
      body: jest.fn()
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await companyController.addCompany(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({
      data: { id: 1 }
    });
  });
  it('should return error when save details to company is called', async ()=>{
    jest.spyOn(companyService, 'addCompany').mockRejectedValue(new Error('Internal Server Error'));
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await companyController.addCompany(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.json).toBeCalledWith({
      
      error: 'Something went wrong'
    });
  });
});