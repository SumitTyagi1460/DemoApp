using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer;
using System.Data.SqlClient;
using System.Data;
using DemoApp.Models;


namespace DemoApp.Controllers
{
    [Produces("application/json")]
    [Route("api/UserDetails")]
    
    public class UserDetailsController : Controller
    {
        // GET: api/UserDetails
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UserDetails/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/UserDetails
        [HttpPost]
        public void Post([FromBody] UserDetail UserInfo)
        //public void Post([FromBody] string val )
        {
            string test = "test111";
            if (test == "test")
            {
                test = "test123";
            }

            //SqlConnection myConnection = new SqlConnection();
            //myConnection.ConnectionString = @"Server=fpivqatcfdbx.csc-fsg.com;User ID=isol_app;Password=cx6vnqa;Database=BugTracker;Trusted_Connection=True;MultipleActiveResultSets=true;Database=DBCompany;"; 
            //SqlCommand sqlCmd = new SqlCommand();
            //sqlCmd.CommandType = CommandType.Text;
            //sqlCmd.CommandText = "INSERT INTO tblUserInfo (Name,PhoneNumber,Email,Address,State,City,Zip) Values (@Name,@PhoneNumber,@Email,@Address,@State,@City,@Zip)";
            //sqlCmd.Connection = myConnection;


            //sqlCmd.Parameters.AddWithValue("@Name", UserInfo.Name);
            //sqlCmd.Parameters.AddWithValue("@PhoneNumber", UserInfo.Phone);
            //sqlCmd.Parameters.AddWithValue("@Email", UserInfo.Email);
            //sqlCmd.Parameters.AddWithValue("@Address", UserInfo.Address);
            //sqlCmd.Parameters.AddWithValue("@State", UserInfo.Name);
            //sqlCmd.Parameters.AddWithValue("@City", UserInfo.City);
            //sqlCmd.Parameters.AddWithValue("@Zip", UserInfo.Zip);
            //myConnection.Open();
            //int rowInserted = sqlCmd.ExecuteNonQuery();
            //myConnection.Close();

        }
        
        // PUT: api/UserDetails/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
