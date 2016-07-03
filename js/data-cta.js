var _DATA_CTA = {
  // Peut-être un tableau ou un nombre
  // L'utilisation de plusieurs cid est utile en cas d'AB test
  iraiser_cid : 115,
  iraiser_url : 'soutenir.la-spa.fr',

  // Nom de la catégorie de l'evenement remonté dans Woopra
  // Doit être une string (le numéro du bouton CTA y sera concaténé)
  woopra_interaction :   'don-CTA_eliot16',

  // Upgrade affiché sur iRaiser
  segments : {
    'OPTIN':    {'arrondiSup':0, 'type': 'fixe',     'values':[35, 55, 75, 120]} ,
    'ADHERENT': {'arrondiSup':5, 'type': 'addition', 'values':[0, 5, 10]} ,
    'DONATEUR': {'arrondiSup':5, 'type': 'percent',  'values':[0, 25, 50]} ,
    'MIDDLE':   {'arrondiSup':5, 'type': 'addition', 'values':[0, 25, 100]} ,
    'GD':       {'arrondiSup':0, 'type': 'libre'}
  }
};
