import { createContext } from "react"
import pngwing from "../assets/pngwing.png"
import House from "../assets/House.png"
import CartoonIce from "../assets/CartoonIce.png"
import Enmascarar from "../assets/Enmascarar.png"

const stateInitial = {
  bussinesName: 'Hammer',
  description: 'Insurance',
  services: [
    {
      id: 1,
      name: "Auto",
      url_image: pngwing,
      description: "Múltiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!"
    },
    {
      id: 2,
      name: "Hogal",
      url_image: House,
      description: "Protege tu casa propiedad en alquiler, casa movil o seguro de inquilino. Elige entre múltiples opciones."
    },
    {
      id: 3,
      name: "Negocio",
      url_image: CartoonIce,
      description: "Asegura tu negocios, tus trabajandores y cualquier vehiculo comercial. General Liability, Workers Comp, Bonds etc."
    },
    {
      id: 4,
      name: "Placas",
      url_image: Enmascarar,
      description: "Hammer  renueva las placas y calcomania de su auto ademas de gestionar el cambio de propietario y demas tramitaciones."
    }
  ]
}

const StateContext = createContext(stateInitial);

export { StateContext, stateInitial };