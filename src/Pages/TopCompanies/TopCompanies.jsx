import { BiLocationPlus } from 'react-icons/bi';
import check from '../../assets/Companies/check.png'
import employee1 from '../../assets/Companies/e1.png'
import employee2 from '../../assets/Companies/e2.png'
import employee3 from '../../assets/Companies/e3.png'
import employee4 from '../../assets/Companies/e4.png'
import employee5 from '../../assets/Companies/e5.png'
import employee6 from '../../assets/Companies/e6.png'
import employee7 from '../../assets/Companies/e7.png'
import employee8 from '../../assets/Companies/e8.png'
import employee9 from '../../assets/Companies/e9.png'
import employee10 from '../../assets/Companies/e10.png'
import employee11 from '../../assets/Companies/e11.png'
import employee12 from '../../assets/Companies/e12.png'


const TopCompanies = () => {
    const employeeData = [
        {
            id: 1,
            tilte: 'IT & Networking',
            company: 'Mermedia Ltd',
            locationn: '195 Nassau Ave, Brooklyn',
            image: employee1
        }, {
            id: 2,
            tilte: 'Engineering',
            company: 'Aprico Ltd',
            locationn: '117 Avenue D, NY',
            image: employee2
        }, {
            id: 3,
            tilte: 'Customer Service',
            company: 'Barone Ltd',
            locationn: '158 Ludlow St, NY',
            image: employee3
        }, {
            id: 4,
            tilte: 'Accounting',
            company: 'Acme Co',
            locationn: '178 Broadway, Brooklyn',
            image: employee4
        }, {
            id: 5,
            tilte: 'IT & Networking',
            company: 'Biffco Ltd',
            locationn: '254 S 2nd St, Brooklyn',
            image: employee5
        }, {
            id: 6,
            tilte: 'Writing',
            company: 'Big Kahuna',
            locationn: ' 83 Moorgate, Greater',
            image: employee6
        }, {
            id: 7,
            tilte: 'Sales & Marketing',
            company: 'Abstergo Ltd',
            locationn: ' 129 Avenue D, NY',
            image: employee7
        }, {
            id: 8,
            tilte: 'Project Manager',
            company: 'Binford Ltd',
            locationn: '125 Avenue D, NY',
            image: employee8
        }, {
            id: 9,
            tilte: 'Customer Service',
            company: 'Samsong',
            locationn: '348 Wythe Ave, Brooklyn',
            image: employee9
        }, {
            id: 10,
            tilte: 'Accounting',
            company: 'Rigid Co.',
            locationn: '57 Pitfield St',
            image: employee10
        }, {
            id: 11,
            tilte: 'Customer Service',
            company: 'Bosch Ltd',
            locationn: '110 Bishopsgate',
            image: employee11
        }, {
            id: 12,
            tilte: 'Accounting',
            company: 'Employer',
            locationn: ' 162 Bedford Ave, Brooklyn',
            image: employee12
        }
    ]

    return (
        <div>

            <div className="text-center mt-10">
                <h2 className="text-3xl font-bold text-[#FF3811]">Top Level Companies</h2>
                <p className="text-sm font-semibold mt-2">Showing companies based on reviews and recent job openings. These are ours top hiring companies. <br /> Get your opportunity to work with them as well.</p>
            </div>

            <div className='my-5 lg:my-10'>

                <div className='grid grid-cols-1 lg:grid-cols-4  gap-4 mt-3'>
                    {employeeData?.map(em => {
                        const { tilte, company, locationn, image } = em || {}
                        return (<div key={em.id} className='border p-4 rounded-md flex gap-2 transition-all cursor-pointer  '>
                            <img loading='lazy' className='w-[50px] h-[50px]' src={image} alt="" />
                            <div>
                                <h1 className='text-[#0E7355] text-base font-semibold'>{tilte}</h1>
                                <h1 className='flex items-center gap-1'><span className='text-sm font-bold'>{company}</span> <img src={check} alt="" /></h1>
                                <h1 className='flex text-xs items-center text-[#aeadad]'><BiLocationPlus />{locationn}</h1>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

        </div>
    );
};

export default TopCompanies;