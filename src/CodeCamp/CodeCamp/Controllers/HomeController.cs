﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeCamp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Index");
        }
        public ActionResult Login()
        {
            return PartialView("_Login");
        }

        public ActionResult Register()
        {
            return PartialView("_Register");
        }
    }
}
