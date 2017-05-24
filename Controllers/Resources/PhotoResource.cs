using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vega.Controllers.Resources
{
    public class PhotoResource
    {
        public int Id { get; set; }
       
        public string FileName { get; set; }
        public int VehicleId { get; set; }
    }
}
