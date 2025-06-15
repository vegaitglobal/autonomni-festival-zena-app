import { Program } from '@/types/apiModels/Program';

export const findLatestProgram = (programs: Program[]): Program | null => {
    if (!programs || programs.length === 0) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let closestFutureProgram: Program | null = null;
    let closestFutureDate: Date | null = null;

    programs.forEach((program) => {
        const timelineComponent = program.components?.find(
            (comp) => comp.__component === 'program-components.program-timeline'
        );

        if (timelineComponent?.schedule) {
            timelineComponent.schedule.forEach((scheduleItem) => {
                const scheduleDate = new Date(scheduleItem.date);
                scheduleDate.setHours(0, 0, 0, 0);

                if (scheduleDate >= today) {
                    if (!closestFutureDate || scheduleDate < closestFutureDate) {
                        closestFutureDate = scheduleDate;
                        closestFutureProgram = program;
                    }
                }
            });
        }
    });

    return closestFutureProgram || programs[0];
};