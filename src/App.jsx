import "./app.css";
import logo from "../public/lorelei-1759003626063.jpg";

const formateadorEspañol = new Intl.DateTimeFormat("es", {
  dateStyle: "long",
});

const App = () => (
  <div className="flex flex-col w-full">
    <span className="p-5 font-semibold">✨ Notion & Google</span>
    <div className="flex md:flex-row px-5 flex-col-reverse md:items-center bg-[#4A9782] py-[2.5em] md:py-[3.5em]">
      <div className="flex flex-col mr-auto">
        <span className="text-3xl font-bold">Politicas de privacidad</span>
        <span>{formateadorEspañol.format(new Date())}</span>
      </div>
      <img
        src={logo}
        alt="logo"
        className="mr-[10%] md:w-[100px] w-[50px] h-[50px] md:h-[100px] rounded-2xl md:mb-0 mb-2"
      />
    </div>
    <div className="flex flex-col px-5 pt-4">
      <p className="md:text-lg">
        Esta es una página personal creada y gestionada por Angel Abraham Cab
        Gonzalez. La privacidad de los visitantes es importante para mí, y por
        eso quiero explicarte de forma sencilla qué tipo de información podría
        recopilarse durante tu visita y cómo se utiliza. Adjunto la dirección de
        la página{" "}
        <a
          href="http://notionacabgoogle.myddns.me/"
          className="text-blue-500 font-bold"
        >
          Notion a Google
        </a>
      </p>
      <div className="gap-3 flex flex-col mt-6">
        <span className="px-3 py-2 rounded-lg border-gray-600 border bg-gray-200 self-start">
          Recopilación de datos
        </span>
        <p>
          Esta plataforma no recopilia datos tampoco las guarda en un base de
          datos solo se utiliza para fines de automatizar procesos y agilizar
          actividades que vinculan a la plataforma de notion como algunas
          herramientas de google como es google calendar, esta plataforma no
          recopila datos como:
        </p>
        <ul className="space-y-1 text-black list-disc list-inside ">
          <li>Direcciones IP</li>
          <li>Cuentas bancarias o credenciales de acceso</li>
          <li>Direcciones urbanas</li>
          <li>Eventos de google calendar u de otras herramientas de google o notion</li>
        </ul>
      </div>
    </div>
  </div>
);
export default App;
