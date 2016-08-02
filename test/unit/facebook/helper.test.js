import FacebookHelper from '../../../src/facebook/helper.js'
<<<<<<< HEAD
import task1_initModel from '../../../src/database/task1';

describe.only('facebook-helper', () => {
  let facebookHelper = null
  let models = null
  let friends = {}
  let result = {}
  
  before(async (done) => {
    let userId = "726804047343124";
    let token = "EAACEdEose0cBAF0X4E9ENz19a0WoZBzmLPm4wd5ax2WjOCVFNsZB6fIYxEe00i2A5QybbLFPaQ6ZCi3U6AqK8eZCZChUapmMtvjBnGSXIotQeAPTHPF6XeBPhwW2XUlvGct261zdckiAeSUmzP4d04vADwtZCnLEWZCFASAfKwN0gZDZD";
    facebookHelper = new FacebookHelper({userId, token});
    
    models = await task1_initModel()
    friends = await facebookHelper.getFriends()
    
=======

describe('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "";
    let token = "";
    facebookHelper = new FacebookHelper({userId, token});
>>>>>>> f2946ca60db316933c936fa5f6d18e9b1cc6af01
    console.log(facebookHelper);
    done();
  });

<<<<<<< HEAD
  it("get friends list and create friend model", async (done) => {
    try {
      
      friends[0].should.has.keys(
        'id',
        'name'
      );
      
      result = await models.Friend.bulkCreate(friends)
      
      console.log("create model: ", result.dataValues)
      
=======
  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name", "id");
>>>>>>> f2946ca60db316933c936fa5f6d18e9b1cc6af01
      done();
    } catch (e) {
      done(e);
    }
  });
<<<<<<< HEAD
  
  it("find your friend", async (done) => {
    try {
        result = await models.Friend.findOne({
          where: {
            id: "768676876489122"
          },
        });
        
        (result != null).should.be.true;
        
        console.log("id:768676876489122, find friend: ",result.dataValues)
        
        done();
      } catch (e) {
        done(e);
      }
  });
  
  it("update friend's email", async (done) => {
      try {
        const f_email = "hellojs@trunk.studio";

        result = await models.Friend.findOne({
          where: {
             id: "768676876489122"
          },
        });
        
        result.email = f_email;
        
        await result.save();
        
        result.email.should.be.eq(f_email);
        
        console.log("updata email: ", result.dataValues)
        
        done();
      } catch (e) {
        done(e);
      }
  });
    
  it("destroy friend", async (done) => {
      try {;

        result = await models.Friend.findOne({
          where: {
             id: "100000416627762"
          },
        });
        
        await result.destroy();

        const check = await models.Friend.findOne({
          where: {
            id: "100000416627762"
          },
        });
        (check === null).should.be.true;
        
        result = await models.Friend.findAll();

        console.log("delete friend: ", result.dataValues)
        done();
      } catch (e) {
        done(e);
      }
    });
  
=======

>>>>>>> f2946ca60db316933c936fa5f6d18e9b1cc6af01
  it.skip("publish post", async (done) => {
    try {
      let post = {
        message: 'test facebook post api'
      }
      let result = await facebookHelper.publishPost(post);
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
});
