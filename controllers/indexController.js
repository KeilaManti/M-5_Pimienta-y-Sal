var platosMenu = [
	{
	    id: 1,
	    nombre: "Risotto de berenjena",
	    detalle: "Risotto de berenjena y queso de cabra",
	    foto: "Risotto-berenjena-queso-cabra.jpg",
	    precio: "U$S 47.00"
	},

	{
	    id: 2,
	    nombre: "Mousse de arroz",
	    detalle:"Mousse de arroz con leche y aroma de azahar",
	    foto: "Mousse-de-arroz-con-leche.jpg",
	    precio: "U$S 27.50"
	},

	{
	    id: 3,
	    nombre: "Espárragos blancos",
	    detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
	    foto: "esparragos.png",
	    precio: "U$S 37.50"
	},

	{
	    id: 4,
	    nombre: "Carpaccio fresco",
	    detalle: "Entrada Carpaccio de salmón con cítricos",
	    foto: "Carpaccio-de-salmon.jpg",
	    precio:"U$S 65.50"
	}
]

let aboutSection = {
  	titulo:"Pimienta & Sal",
  	pTexto1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use", 
  	pTexto2:" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

const controlador = {
	index: (req, res) => {
		res.render("index", {platosMenu, aboutSection});
	},
	detalle: (req, res) => {
		for(let i = 0; i < platosMenu.length; i++) {
			if (i+1 == req.params.id) {
				res.render("detalleMenu", {
					nombre: platosMenu[i].nombre,
					detalle: platosMenu[i].detalle,
					foto: platosMenu[i].foto,
					precio: platosMenu[i].precio,
				});
			}
        }
	}
};

module.exports = controlador;