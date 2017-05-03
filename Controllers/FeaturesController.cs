using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Vega.Controllers.Resources;
using Vega.Core.Models;
using Vega.Models;
using Vega.Persistance;

namespace Vega.Controllers
{
    public class FeaturesController:Controller
    {
        private readonly VegaDbContext _context;
        private readonly IMapper mapper;
        public FeaturesController(VegaDbContext context,IMapper mapper)
        {
            this.mapper = mapper;
            this._context = context;
        }
        [HttpGet("/api/features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures()
        {
            var features = await _context.Features.ToListAsync();
            return Mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
    }
}
