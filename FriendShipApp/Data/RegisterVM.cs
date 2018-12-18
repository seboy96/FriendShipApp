using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FriendShipApp.Data
{
    public class RegisterVM
    {
        [Required(ErrorMessage = "{0} is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "{0} is required")]
        public string Password { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Birthdate { get; set; }
    }
}
