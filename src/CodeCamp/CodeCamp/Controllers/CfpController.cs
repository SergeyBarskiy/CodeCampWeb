using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeCamp.Controllers
{
    public class CfpController : Controller
    {

        public ActionResult Cfp()
        {
            return PartialView("_Cfp");
        }
    }
}
