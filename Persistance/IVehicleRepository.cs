using System.Threading.Tasks;
using Vega.Models;

namespace Vega.Persistance
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id);
    }
}