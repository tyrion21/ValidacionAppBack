"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ValidacionService = class ValidacionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createValidacionDto) {
        const { Folio, Cajas, Especie, Estado, Camara, Usuario, Packing } = createValidacionDto;
        try {
            const findValidacion = await this.prisma.prismaClient4.validaciones.findFirst({
                where: { Folio: Folio },
            });
            if (findValidacion) {
                return { message: 'Folio ya fue validado' };
            }
            else {
                const newValidacion = await this.prisma.prismaClient4.validaciones.create({
                    data: {
                        Folio,
                        Cajas,
                        Especie,
                        Estado,
                        Camara,
                        Usuario,
                        Packing,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                });
                return newValidacion;
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error al insertar validación: ${error.message}`);
        }
        finally {
        }
    }
    async getFolioValidado(folio) {
        try {
            const validacion = await this.prisma.prismaClient4.validaciones.findUnique({
                where: { Folio: folio },
                select: { createdAt: true },
            });
            if (validacion) {
                throw new common_1.NotFoundException(`Folio ${folio} validado el ${validacion.createdAt}`);
            }
            else {
                throw new common_1.NotFoundException(`Folio ${folio} no fue encontrado`);
            }
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Ocurrió un error al buscar el folio');
            }
        }
    }
    async getCajasPacking() {
        try {
            console.log('Consultando cajas-packing...');
            const resultado = await this.prisma.prismaClient4.v_cajas_packing.findMany({
                select: {
                    Fecha_packing: true,
                    Folio: true,
                    Cajas: true,
                    LINEA: true,
                },
            });
            console.log(`Se encontraron ${resultado.length} registros`);
            return resultado;
        }
        catch (error) {
            console.error('Error detallado en getCajasPacking:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener datos de cajas packing: ${error.message}`);
        }
    }
    async getCajasValidadas() {
        try {
            return await this.prisma.prismaClient4.v_cajas_validadas.findMany({
                select: {
                    Fecha_packing: true,
                    Folio: true,
                    Cajas: true,
                    Camara: true,
                },
            });
        }
        catch (error) {
            console.error('Error en getCajasValidadas:', error);
            throw new common_1.InternalServerErrorException('Error al obtener datos de cajas validadas');
        }
    }
    async getCajasPackingSummary(fecha, linea) {
        try {
            console.log(`Consultando resumen con filtros - fecha: ${fecha}, linea: ${linea}`);
            const where = {};
            if (fecha) {
                where.Fecha_packing = fecha;
            }
            if (linea) {
                where.LINEA = linea;
            }
            const registros = await this.prisma.prismaClient4.v_cajas_packing.findMany({
                where,
                select: {
                    Folio: true,
                    Cajas: true,
                },
            });
            const totalFolios = registros.length;
            const totalCajas = registros.reduce((sum, record) => sum + record.Cajas, 0);
            return {
                totalFolios,
                totalCajas,
            };
        }
        catch (error) {
            console.error('Error detallado en getCajasPackingSummary:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener resumen de cajas packing: ${error.message}`);
        }
    }
    async getCajasValidadasSummary(fecha, linea) {
        try {
            console.log(`Consultando resumen con filtros - fecha: ${fecha}, linea: ${linea}`);
            const where = {};
            if (fecha) {
                where.Fecha_packing = fecha;
            }
            if (linea) {
                where.Camara = linea;
            }
            const registros = await this.prisma.prismaClient4.v_cajas_validadas.findMany({
                where,
                select: {
                    Folio: true,
                    Cajas: true,
                },
            });
            const totalFolios = registros.length;
            const totalCajas = registros.reduce((sum, record) => sum + record.Cajas, 0);
            return {
                totalFolios,
                totalCajas,
            };
        }
        catch (error) {
            console.error('Error detallado en getCajasPackingSummary:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener resumen de cajas packing: ${error.message}`);
        }
    }
    async getCajasDesviacionesSummary(fecha, linea) {
        try {
            console.log(`Consultando resumen de desviaciones con filtros - fecha: ${fecha}, linea: ${linea}`);
            const where = {};
            if (fecha) {
                where.Fecha_packing = fecha;
            }
            if (linea) {
                where.camara = linea;
            }
            const registros = await this.prisma.prismaClient4.v_cajas_rechazadas.findMany({
                where,
                select: {
                    folio_rechazado: true,
                    cajas: true,
                },
            });
            const totalFolios = registros.length;
            const totalCajas = registros.reduce((sum, record) => sum + record.cajas, 0);
            return {
                totalFolios,
                totalCajas,
            };
        }
        catch (error) {
            console.error('Error detallado en getCajasDesviacionesSummary:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener resumen de desviaciones: ${error.message}`);
        }
    }
    async createRechazo(rechazoDto) {
        try {
            const { Folio, Motivos, Usuario, Especie, Cajas, Camara, Packing } = rechazoDto;
            console.log('Valores recibidos para createRechazo:');
            console.log('Folio:', Folio, 'tipo:', typeof Folio);
            console.log('Especie:', Especie, 'tipo:', typeof Especie);
            console.log('Cajas:', Cajas, 'tipo:', typeof Cajas);
            console.log('Camara:', Camara, 'tipo:', typeof Camara);
            console.log('Packing:', Packing, 'tipo:', typeof Packing);
            console.log('Motivos:', Motivos, 'es array:', Array.isArray(Motivos));
            try {
                const existingRejection = await this.prisma.prismaClient4.rechazados.findFirst({
                    where: { folio_rechazado: String(Folio || '') }
                });
                if (existingRejection) {
                    throw new common_1.ConflictException('Este folio ya ha sido rechazado anteriormente');
                }
            }
            catch (error) {
                if (error instanceof common_1.ConflictException) {
                    throw error;
                }
            }
            const lastRejection = await this.prisma.prismaClient4.rechazados.findFirst({
                orderBy: {
                    id_rechazado: 'desc'
                }
            });
            let lastId = 1;
            if (lastRejection) {
                lastId = lastRejection.id_rechazado + 1;
            }
            if (!Array.isArray(Motivos) || Motivos.length === 0) {
                throw new Error('No se especificaron motivos de rechazo válidos');
            }
            const now = new Date();
            const createdRejections = [];
            for (const motivo of Motivos) {
                if (!motivo || !motivo.id) {
                    console.warn('Motivo sin ID, se omitirá:', motivo);
                    continue;
                }
                const motivoId = typeof motivo.id === 'number' ? motivo.id : parseInt(motivo.id, 10);
                const folio = String(Folio || '');
                const cajas = typeof Cajas === 'number' ? Cajas : parseInt(String(Cajas || '0'), 10) || 0;
                const usuario = String(Usuario || 'jason');
                const especie = String(Especie || '');
                const camara = String(Camara || '');
                const packing = String(Packing || '');
                try {
                    const newRechazo = await this.prisma.prismaClient4.rechazados.create({
                        data: {
                            id_rechazado: lastId++,
                            folio_rechazado: folio,
                            id_motivo_rechazo_fk: motivoId,
                            fecha_rechazado: now,
                            usuario: usuario,
                            cajas: cajas,
                            camara: camara,
                            nombre_estado: 'R',
                            estado: true,
                            packing: packing,
                            especie: especie
                        }
                    });
                    createdRejections.push(newRechazo);
                }
                catch (error) {
                    console.error('Error al crear registro de rechazo para motivo:', motivo, error);
                }
            }
            if (createdRejections.length === 0) {
                throw new Error('No se pudo crear ningún registro de rechazo');
            }
            return {
                success: true,
                message: 'Pallet rechazado correctamente',
                rejections: createdRejections
            };
        }
        catch (error) {
            console.error('Error en createRechazo:', error);
            if (error instanceof common_1.ConflictException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`No se pudo registrar el rechazo: ${error.message}`);
        }
    }
    async getMotivosRechazo() {
        try {
            const motivos = await this.prisma.prismaClient4.dm_motivo_rechazo.findMany({
                where: {
                    estado_motivo: true
                },
                select: {
                    id_motivo: true,
                    nombre_motivo: true
                }
            });
            return motivos;
        }
        catch (error) {
            console.error('Error al obtener motivos de rechazo:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener motivos de rechazo: ${error.message}`);
        }
    }
    async verificarRechazoPorFolio(folio) {
        try {
            const rechazo = await this.prisma.prismaClient4.rechazados.findFirst({
                where: {
                    folio_rechazado: String(folio || '')
                }
            });
            if (!rechazo) {
                return {
                    rechazado: false,
                    message: 'El folio no ha sido rechazado'
                };
            }
            return {
                rechazado: true,
                estado: rechazo.nombre_estado,
                message: 'El folio ha sido rechazado anteriormente',
                fecha: rechazo.fecha_rechazado,
                motivo_id: rechazo.id_motivo_rechazo_fk
            };
        }
        catch (error) {
            console.error('Error en verificarRechazoPorFolio:', error);
            throw new common_1.InternalServerErrorException(`Error al verificar estado de rechazo: ${error.message}`);
        }
    }
    async actualizarEstadoRechazo(folio) {
        try {
            const result = await this.prisma.prismaClient4.rechazados.updateMany({
                where: {
                    folio_rechazado: String(folio || ''),
                    nombre_estado: 'R'
                },
                data: {
                    nombre_estado: 'A'
                }
            });
            if (result.count === 0) {
                return {
                    success: false,
                    message: 'No se encontraron registros de rechazo para actualizar'
                };
            }
            return {
                success: true,
                message: `Se han actualizado ${result.count} registros de rechazo`,
                count: result.count
            };
        }
        catch (error) {
            console.error('Error en actualizarEstadoRechazo:', error);
            throw new common_1.InternalServerErrorException(`Error al actualizar estado de rechazo: ${error.message}`);
        }
    }
    async verificarValidacionPorFolio(folio) {
        try {
            const validacion = await this.prisma.prismaClient4.validaciones.findUnique({
                where: { Folio: folio }
            });
            return {
                validado: validacion !== null,
                fecha: validacion ? validacion.createdAt : null
            };
        }
        catch (error) {
            console.error('Error en verificarValidacionPorFolio:', error);
            throw new common_1.InternalServerErrorException(`Error al verificar estado de validación: ${error.message}`);
        }
    }
    async getInformeDiario(fecha, estado) {
        try {
            const where = {};
            if (fecha) {
                where['Fecha_packing'] = fecha;
            }
            if (estado) {
                where['Estado'] = estado;
            }
            const informeDiario = await this.prisma.prismaClient4.v_informe_diario.findMany({
                where,
                select: {
                    Folio: true,
                    Especie: true,
                    Fecha_packing: true,
                    Cajas: true,
                    LINEA: true,
                    Camara: true,
                    Estado: true
                },
                orderBy: [
                    { Fecha_packing: 'desc' },
                    { Folio: 'asc' }
                ]
            });
            return informeDiario;
        }
        catch (error) {
            console.error('Error al obtener informe diario:', error);
            throw new common_1.InternalServerErrorException(`Error al obtener informe diario: ${error.message}`);
        }
    }
};
exports.ValidacionService = ValidacionService;
exports.ValidacionService = ValidacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ValidacionService);
//# sourceMappingURL=validacion.service2.js.map