using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FriendShipApp.Data;
//using FriendShipApp.Migrations;
using FriendShipApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FriendShipApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _repo;

        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getusers")]
        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _repo.GetUsers();
        }

        [HttpGet("{id}")]
        public async Task<User> GetUser(int id)
        {
            return await _repo.GetUser(id);
        }
    }
}
