﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vega.Models;

namespace Vega.Persistance
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly VegaDbContext context;
        public VehicleRepository(VegaDbContext context)
        {
            this.context = context;
        }
        public async Task<Vehicle> GetVehicle(int id,bool includeRelated=true)
        {
            if (includeRelated!=false)
            {
                return await context.Vehicles.FindAsync(id);
            }
            return await context.Vehicles
              .Include(v => v.Features)
              .ThenInclude(vf => vf.Feature) //nested object
              .Include(v => v.Model)
              .ThenInclude(m => m.Make)
              .SingleOrDefaultAsync(v => v.Id == id);
        }

        //public async Task<Vehicle> GetVehicleWithMake(int id)
        //{

        //}

        public void Add(Vehicle vehicle)
        {
            context.Vehicles.Add(vehicle);
        }

        public void Remove(Vehicle vehicle)
        {
            context.Remove(vehicle);
        }
    }
}
