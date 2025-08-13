
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.Capacidad_lineasScalarFieldEnum = {
  id: 'id',
  cod_linea: 'cod_linea',
  cod_esp: 'cod_esp',
  nro_vias: 'nro_vias',
  capacidad_vias: 'capacidad_vias'
};

exports.Prisma.Cc_checklistScalarFieldEnum = {
  id: 'id',
  n_proceso: 'n_proceso',
  cod_esp: 'cod_esp',
  cod_var: 'cod_var',
  cod_pro: 'cod_pro',
  cod_linea: 'cod_linea',
  fecha: 'fecha',
  cal_encerado: 'cal_encerado',
  porc_exp: 'porc_exp',
  cal_cajas: 'cal_cajas',
  porc_plu_c: 'porc_plu_c',
  peso_caj: 'peso_caj',
  cal_palet: 'cal_palet',
  saturacion: 'saturacion',
  porc_exp_c: 'porc_exp_c',
  usuario: 'usuario',
  porc_plu: 'porc_plu',
  cod_emp: 'cod_emp',
  cod_tem: 'cod_tem',
  cod_envop: 'cod_envop',
  peso_c: 'peso_c',
  fec_muestra: 'fec_muestra'
};

exports.Prisma.CertificacionScalarFieldEnum = {
  id: 'id',
  exportadora: 'exportadora',
  productor: 'productor',
  ggn: 'ggn',
  fecha_emision: 'fecha_emision',
  fecha_caducidad: 'fecha_caducidad',
  vigencia: 'vigencia',
  especie: 'especie',
  mercados: 'mercados'
};

exports.Prisma.CorrelativoScalarFieldEnum = {
  id_cor: 'id_cor',
  id_tip_ins: 'id_tip_ins',
  nro_sag: 'nro_sag',
  cod_sdp: 'cod_sdp'
};

exports.Prisma.Env_x_sellarScalarFieldEnum = {
  id: 'id',
  cod_envop: 'cod_envop',
  cod_esp: 'cod_esp',
  cod_exp: 'cod_exp'
};

exports.Prisma.EstadosScalarFieldEnum = {
  id_est_ins: 'id_est_ins',
  des_est_ins: 'des_est_ins',
  tip_sdt: 'tip_sdt',
  id_tip_ins: 'id_tip_ins'
};

exports.Prisma.FoliosScalarFieldEnum = {
  folio: 'folio',
  nom_var: 'nom_var',
  cod_var: 'cod_var',
  cajas: 'cajas',
  fecha: 'fecha',
  calibre: 'calibre',
  embalaje: 'embalaje'
};

exports.Prisma.Folios_frioScalarFieldEnum = {
  folio: 'folio',
  nom_var: 'nom_var',
  cod_var: 'cod_var',
  cajas: 'cajas',
  fecha: 'fecha',
  calibre: 'calibre',
  embalaje: 'embalaje'
};

exports.Prisma.Folios_packScalarFieldEnum = {
  folio: 'folio',
  nom_var: 'nom_var',
  cod_var: 'cod_var',
  cajas: 'cajas',
  fecha: 'fecha',
  calibre: 'calibre',
  embalaje: 'embalaje'
};

exports.Prisma.Folios_seScalarFieldEnum = {
  folio: 'folio',
  nom_var: 'nom_var',
  cod_var: 'cod_var',
  cajas: 'cajas',
  fecha: 'fecha',
  calibre: 'calibre',
  embalaje: 'embalaje'
};

exports.Prisma.Fr_repa_cabScalarFieldEnum = {
  id: 'id',
  fec_rep: 'fec_rep',
  id_tip_rep: 'id_tip_rep',
  fr_cod_pac: 'fr_cod_pac',
  fr_cod_fri: 'fr_cod_fri',
  fr_usu: 'fr_usu',
  fr_rep_sag: 'fr_rep_sag',
  fr_cod_tem: 'fr_cod_tem',
  fr_cod_emp: 'fr_cod_emp',
  fr_tra_sdt: 'fr_tra_sdt',
  fr_nro_rep: 'fr_nro_rep',
  fr_cod_esp: 'fr_cod_esp'
};

exports.Prisma.Fr_repa_detScalarFieldEnum = {
  id: 'id',
  id_rep_cab: 'id_rep_cab',
  fr_lote: 'fr_lote',
  fr_cor_sdt: 'fr_cor_sdt',
  fr_pla_sdt: 'fr_pla_sdt',
  fr_est_sdt: 'fr_est_sdt',
  fr_fec_pac: 'fr_fec_pac',
  fr_fec_rpa: 'fr_fec_rpa',
  fr_gui_sdt: 'fr_gui_sdt',
  fr_cod_pro: 'fr_cod_pro',
  fr_cod_esp: 'fr_cod_esp',
  fr_cod_var: 'fr_cod_var',
  fr_hor_rec: 'fr_hor_rec',
  fr_con: 'fr_con',
  fr_tip_lot: 'fr_tip_lot',
  fr_alt_pal: 'fr_alt_pal',
  fr_cod_env: 'fr_cod_env',
  fr_cod_eti: 'fr_cod_eti',
  fr_cod_emb: 'fr_cod_emb',
  fr_cod_envop: 'fr_cod_envop',
  fr_plu: 'fr_plu',
  fr_caj: 'fr_caj',
  fr_cod_cat: 'fr_cod_cat',
  fr_cod_cal: 'fr_cod_cal',
  fr_nro_mix: 'fr_nro_mix',
  fr_fec_sem: 'fr_fec_sem',
  fr_cod_bp: 'fr_cod_bp',
  fr_cod_pre: 'fr_cod_pre',
  fr_cod_cua: 'fr_cod_cua',
  fr_proceso: 'fr_proceso',
  fr_con_fri: 'fr_con_fri',
  fr_fol_ori: 'fr_fol_ori',
  fr_cod_var_eti: 'fr_cod_var_eti',
  fr_cod_tip_tra: 'fr_cod_tip_tra',
  fr_cod_pro_eti: 'fr_cod_pro_eti',
  fr_cod_exp: 'fr_cod_exp',
  fr_pk_ori: 'fr_pk_ori',
  id_tip_io: 'id_tip_io',
  fr_caj_usa: 'fr_caj_usa',
  fr_tip_mov: 'fr_tip_mov',
  fr_fec_sag: 'fr_fec_sag',
  fr_guia_sag: 'fr_guia_sag',
  fr_cer_sag: 'fr_cer_sag',
  fr_sol_sag: 'fr_sol_sag',
  fr_tip_sag: 'fr_tip_sag',
  fr_cod_mer: 'fr_cod_mer',
  fr_cod_mer1: 'fr_cod_mer1',
  fr_cod_mer2: 'fr_cod_mer2',
  fr_cod_mer3: 'fr_cod_mer3',
  fr_cod_mer4: 'fr_cod_mer4',
  fr_fec_fum: 'fr_fec_fum',
  fr_guia_fum: 'fr_guia_fum',
  fr_cer_fum: 'fr_cer_fum',
  fr_cod_tipo_fum: 'fr_cod_tipo_fum',
  fr_pfrio: 'fr_pfrio',
  fr_correlativo_rec: 'fr_correlativo_rec',
  fr_cod_linea: 'fr_cod_linea',
  fr_peso_original: 'fr_peso_original'
};

exports.Prisma.Gr_Tipo_CobroScalarFieldEnum = {
  id: 'id',
  Descripcion: 'Descripcion',
  tipo_c: 'tipo_c'
};

exports.Prisma.Insp_cabScalarFieldEnum = {
  id_ins: 'id_ins',
  nro_sag: 'nro_sag',
  cod_csp: 'cod_csp',
  id_tip_ins: 'id_tip_ins',
  fec_doc: 'fec_doc',
  fec_ins: 'fec_ins',
  id_usuario: 'id_usuario',
  cod_mer: 'cod_mer',
  cod_mer1: 'cod_mer1',
  cod_mer2: 'cod_mer2',
  cod_mer3: 'cod_mer3',
  obs_insp: 'obs_insp',
  id_est_ins: 'id_est_ins'
};

exports.Prisma.Mae_sta_elenaScalarFieldEnum = {
  cod_emb: 'cod_emb'
};

exports.Prisma.Maestro_pluScalarFieldEnum = {
  cod_envop: 'cod_envop',
  cod_cal: 'cod_cal',
  cod_plu: 'cod_plu'
};

exports.Prisma.Pk_desver_cabScalarFieldEnum = {
  id: 'id',
  pro_nro: 'pro_nro',
  fec_ini: 'fec_ini',
  fec_fin: 'fec_fin',
  usu_res: 'usu_res',
  pes_ini: 'pes_ini',
  pes_fin: 'pes_fin',
  cod_esp: 'cod_esp',
  fec_ven: 'fec_ven'
};

exports.Prisma.Pk_desver_detScalarFieldEnum = {
  id: 'id',
  id_cab: 'id_cab',
  folio: 'folio',
  cod_var: 'cod_var',
  cod_esp: 'cod_esp',
  peso_neto: 'peso_neto',
  peso_fin: 'peso_fin',
  cod_cal: 'cod_cal'
};

exports.Prisma.Sys_logScalarFieldEnum = {
  id: 'id',
  tip_eve: 'tip_eve',
  usu_sys: 'usu_sys',
  ip_pc: 'ip_pc',
  fecha_log: 'fecha_log',
  folio: 'folio',
  modulo: 'modulo'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.Tipo_insScalarFieldEnum = {
  id_tip_ins: 'id_tip_ins',
  des_tip_ins: 'des_tip_ins'
};

exports.Prisma.Traductor_calibreScalarFieldEnum = {
  id: 'id',
  n_calibre_std: 'n_calibre_std',
  val_calibre: 'val_calibre',
  cod_exp: 'cod_exp',
  n_calibre: 'n_calibre'
};

exports.Prisma.Validacion_palletsScalarFieldEnum = {
  id: 'id',
  numero_pallet: 'numero_pallet',
  temporada: 'temporada'
};

exports.Prisma.Existencias_cajasScalarFieldEnum = {
  Camara: 'Camara',
  Especie: 'Especie',
  Fecha_packing: 'Fecha_packing',
  Hora_Packing: 'Hora_Packing',
  Packing: 'Packing',
  Folio: 'Folio',
  Productor: 'Productor',
  CSG: 'CSG',
  Marca: 'Marca',
  Embalaje: 'Embalaje',
  Linea: 'Linea',
  Exportadora: 'Exportadora',
  Jornada: 'Jornada',
  Variedad: 'Variedad',
  Calibre: 'Calibre',
  Categoria: 'Categoria',
  Cajas: 'Cajas',
  Proceso: 'Proceso'
};

exports.Prisma.Existenciamix_cajasScalarFieldEnum = {
  Camara: 'Camara',
  Fecha_Packing: 'Fecha_Packing',
  Hora_Packing: 'Hora_Packing',
  Packing: 'Packing',
  Folio: 'Folio',
  Productor: 'Productor',
  CSG: 'CSG',
  Cuartel: 'Cuartel',
  Variedad: 'Variedad',
  Embalaje: 'Embalaje',
  Etiqueta: 'Etiqueta',
  Calibre: 'Calibre',
  Categoria: 'Categoria',
  Cajas: 'Cajas',
  Proceso: 'Proceso'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  capacidad_lineas: 'capacidad_lineas',
  cc_checklist: 'cc_checklist',
  certificacion: 'certificacion',
  correlativo: 'correlativo',
  env_x_sellar: 'env_x_sellar',
  estados: 'estados',
  folios: 'folios',
  folios_frio: 'folios_frio',
  folios_pack: 'folios_pack',
  folios_se: 'folios_se',
  fr_repa_cab: 'fr_repa_cab',
  fr_repa_det: 'fr_repa_det',
  Gr_Tipo_Cobro: 'Gr_Tipo_Cobro',
  insp_cab: 'insp_cab',
  mae_sta_elena: 'mae_sta_elena',
  maestro_plu: 'maestro_plu',
  pk_desver_cab: 'pk_desver_cab',
  pk_desver_det: 'pk_desver_det',
  sys_log: 'sys_log',
  sysdiagrams: 'sysdiagrams',
  tipo_ins: 'tipo_ins',
  traductor_calibre: 'traductor_calibre',
  validacion_pallets: 'validacion_pallets',
  existencias_cajas: 'existencias_cajas',
  existenciamix_cajas: 'existenciamix_cajas'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
