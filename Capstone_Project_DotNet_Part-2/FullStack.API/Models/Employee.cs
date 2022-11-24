namespace FullStack.API.Models
{
    public class Employee
    {
       public Guid Id { get; set; }

        public string Name { get; set; }

        public string Role { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
    }
}
