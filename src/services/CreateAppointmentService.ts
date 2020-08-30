import {startOfHour} from 'date-fns';
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import {getCustomRepository} from 'typeorm';
interface Request {
    provider: string;
    date:Date;
}
/**
 * Dependency Inversion(SOLID)
 *
 */
class CreateAppointmentService{
    // private appointmentsRepository:AppointmentsRepository;

    // constructor(appointmentsRepository:AppointmentsRepository){
    //     this.appointmentsRepository = appointmentsRepository;
    // }

    public async execute({date,provider}:Request) : Promise<Appointment>{
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date);

        const findAppointmentsInSameDate = await appointmentsRepository.findByDate(appointmentDate);

        if(findAppointmentsInSameDate){
            throw Error('This appointment is already booked');
        }

        const appointment = appointmentsRepository.create({
            provider,
            date:appointmentDate
        });

        await appointmentsRepository.save(appointment)

        return appointment;
    }
}

export default CreateAppointmentService;
