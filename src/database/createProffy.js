module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //inserir dados na tabela proffys
    const insertedProffy = await db.run(`
         INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
         ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
         );
    `)

    const proffy_id = insertedProffy.lastID
    
    //inserir dados na table classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na table classSchedule
    const insertedAllClassScheduleValues = ClassScheduleValues.map((ClassScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule ( 
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${ClassScheduleValues.weekday}",
                "${ClassScheduleValues.time_from}",
                "${ClassScheduleValues.time_to}"
            );
        `)
    })

    //aqui vou executar todos os db.run() das class_schedule
    await Promise.all(insertedAllClassScheduleValues)
}