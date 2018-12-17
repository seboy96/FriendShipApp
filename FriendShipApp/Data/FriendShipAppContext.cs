using FriendShipApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FriendShipApp.Data
{
    public class FriendShipAppContext : IdentityDbContext<User>
    {
        public FriendShipAppContext(DbContextOptions<FriendShipAppContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Photo> Photo { get; set; }
    }
}

