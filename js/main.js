


/*************************INICIALICACION DE WIDGET Y CONFIGURACION DEL CHAT*********************************************/
if(!window._genesys)window._genesys = {};
if(!window._gt)window._gt = [];
window._genesys.widgets = {
	main: {
		debug: true,
		theme: "light",
		lang: "en",
		customStylesheetID: "genesys_widgets_custom",
        plugins: [
            "cx-webchat",
	        "cx-webchat-service"
	    ]
    },
    webchat: {
        dataURL: "https://gms-chile.crossnet.la/genesys/2/chat/consorcio-desarrollo",
        apikey: "",
        uploadsEnabled: true,
        confirmFormCloseEnabled: true,
        userData: {},
        autoInvite: {
            enabled: false,
            timeToInviteSeconds: 5,
            inviteTimeoutSeconds: 30
        },
		chatButton: {
		    enabled: true,
		    openDelay: 1000,
		    effectDuration: 300,
		    hideDuringInvite: true
		}
	}
};
/***********************************************************************************************************************************************/

/************************************************SETEO DE FORMULARIO DE CHAT*******************************************************************/
window._genesys.widgets.webchat.form = {
    wrapper: "<table></table>",
    inputs: [{
	    id: "cx_webchat_form_firstname",
	    name: "firstname",
	    maxlength: "100",
	    placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
	    label: "@i18n:webchat.ChatFormFirstName"
	},
	{
	    id: "cx_webchat_form_lastname",
	    name: "lastname",
	    maxlength: "100",
	    placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
	    label: "@i18n:webchat.ChatFormLastName"
	},
	{
		id: "cx_webchat_form_email",
		name: "email",
		maxlength: "100",
		placeholder: "Made mandatory via validate",
		label: "@i18n:webchat.ChatFormEmail",
		type: "text",
		validateWhileTyping: false,	validate: function(event, form, input, label, $, CXBus, Common) {
			if(input) {
			    if (input.val())
			        return true;
			    else
			        return false;
			}
			return false;
		}
	},
	{
		id: "cx_webchat_form_customsubject1",
		name: "customsubject1",
		placeholder: "@i18n:webchat.ChatFormPlaceholderSubject",
		label: "Select 1",
		type: "select",
		options: [
		    {
		        disabled : "disabled",
		        selected : "selected",
		        hidden: "hidden"
		    },
		    {
		        text : "Opción 1",
		        value : "Valor"
		    },
		    {
		        text : "Opción 2",
		        value : "Valor"
		    }
		],
		wrapper: "<tr><th>{label}</th><td>{input}</td></tr>"
 	},
	{
	    id: "cx_webchat_form_customsubject2",
	    name: "customsubject2",
	    placeholder: "@i18n:webchat.ChatFormPlaceholderSubject",
	    label: "Select 2",
	    type: "select",
	    options: [{
	        disabled : "disabled",
	        selected : "selected",
	        hidden: "hidden"
	    },
	    {
	    	group: true,
	    	text : "Grupo 1"
	    },
		{
		    text : "Opcion 2",
		    value : "valor"
		},
		{
			text : "Opcion 3",
		    value : "valor"
		},
		{
		    group: true,
		    text : "Grupo 2"
		},
		{
		    text : "Opcion 1",
		    value : "Valor"
		},
		{
			text : "Opcion 2",
			value : "valor"
	    }],
		wrapper: "<tr><th>{label}</th><td>{input}</td></tr>"
	}]
};

var iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click",function(){
	_genesys.widgets.bus.command('WebChat.open', { //CONFIGURACION DEL EVENTO QUE ABRE LA VENTANA DE CHAT
		userData: {},
		form: {
			autoSubmit: false,
		}, 
	}).done(function(e){
	}).fail(function(e){
	})	
})

