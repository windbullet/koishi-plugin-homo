import { Context, Schema } from 'koishi'

import homo from './homo.js'

export const name = 'homo'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('恶臭论证 <num:number>', '恶臭数字论证器', {checkArgCount: true})
    .example("恶臭论证 1919810")
    .action(async ({ session }, num) => {
      session.send(`${num} = ${homo(num)}`)
    })
}
