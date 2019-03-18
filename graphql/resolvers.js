import { schedules, users, plans, getPlanById, getUserById } from './db'

const resolvers = {
    Query: {
        user: (_, { id }) => getUserById(id),
        plans: () => plans,
        plan: (_, { id }) => getPlanById(id),
        schedule: (_, { id }) => getScheduleById(id),
    },
    Plan: {
        suggester: o => users.find(user => o.suggester === user.id),
        schedules: o => schedules.filter(schedule => o.schedules.includes(schedule.id))
    }
}

export default resolvers