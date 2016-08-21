using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularKendoForm.Startup))]
namespace AngularKendoForm
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
