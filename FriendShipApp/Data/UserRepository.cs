using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FriendShipApp.Models;
//using FriendShipApp.Migrations;
using Microsoft.EntityFrameworkCore;

namespace FriendShipApp.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly FriendShipAppContext _context;

        public UserRepository(FriendShipAppContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            throw new NotImplementedException();
        }

        public void Delete<T>(T entity) where T : class
        {
            throw new NotImplementedException();
        }

        public async Task<User> GetUser(int id)
        {
            return await _context.User.FindAsync(id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.User.ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
