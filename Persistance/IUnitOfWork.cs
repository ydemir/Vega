using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vega.Persistance
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
