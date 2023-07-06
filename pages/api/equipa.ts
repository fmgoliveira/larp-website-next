// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import equipa from './equipa.json'

type Data = any[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = 'https://discord.com/api/v10/guilds/1122137361501913218/members?limit=1000';
  const headers = {
    'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
  };

  fetch(url, { headers })
    .then(res => res.json())
    .then(json => {
      const staffs = json.filter((member: any) => member.roles.includes('1122639199175180391')).filter((member: any) => !['549619189271494676', '326144834849210369', '800832293224710175', '704628945764614144'].includes(member.user.id));

      const staffsFormatted = staffs.map((member: any) => {
        const { user: { username, global_name, avatar } } = member;
        return {
          name: global_name || username,
          role: 'Staff',
          icon: `https://cdn.discordapp.com/avatars/${member.user.id}/${avatar}.png`
        };
      });

      res.status(200).json([...equipa, ...staffsFormatted]);
    });
}
