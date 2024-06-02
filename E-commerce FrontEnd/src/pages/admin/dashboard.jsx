import React from 'react'
import AdminSidebar from '../../components/admin/adminSidebar'
import Table from "../../components/admin/table"
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa6';
import { BiMaleFemale } from 'react-icons/bi';
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import data from "../../assets/data.json"
import { Barchart, GenderChart } from "../../components/admin/chart"
import "../../Styles/admin/dashboard.css";

const dashboard = () => {

    const amount = true;
    const percentage = 52
    const value = 12121212
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch className="mt-4" />
                    <input type="text" placeholder='Search for data , users' />
                    <FaRegBell className="mt-4" />
                    <img
                        className="h-9 w-9 rounded-full mt-1 ml-4"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                </div>


                <section className="widgetContainer">

                    <article className="widget">
                        <div className="widget-info">
                            <p>Revenue</p>
                            <h4>{true ? `$${340000}` : 340000}</h4>
                            {40 > 0 ? (<span className="text-green-500"><HiTrendingUp /> +{40} %</span>) :
                                (<span className="text-red-500"><HiTrendingDown /> -{40} %</span>)}
                        </div>
                        <div className="widgetCircle"
                            style={{
                                background: `conic-gradient(
                                blue ${Math.abs(40) / 100 * 360}deg , rgba(255,255,255)0
                            )` }}>
                            {40 > 0 ? (<span className="text-green-500">{40}%</span>) : (<span className="text-green-500">-{40}%</span>)}
                        </div>
                    </article>


                    <article className="widget">
                        <div className="widget-info">
                            <p>Users</p>
                            <h4>{false ? `$${400}` : 400}</h4>
                            {-14 > 0 ? (<span className="text-green-500"><HiTrendingUp /> +{14} %</span>) :
                                (<span className="text-red-500"><HiTrendingDown /> -{14} %</span>)}
                        </div>
                        <div className="widgetCircle"
                            style={{
                                background: `conic-gradient(
                                yellow ${Math.abs(14) / 100 * 360}deg , rgba(255,255,255)0
                            )` }}>
                            {-14 > 0 ? (<span className="text-green-500">{14}%</span>) : (<span className="text-green-500">-{14}%</span>)}
                        </div>
                    </article>

                    <article className="widget">
                        <div className="widget-info">
                            <p>Transections</p>
                            <h4>{false ? `$${23000}` : 23000}</h4>
                            {80 > 0 ? (<span className="text-green-500"><HiTrendingUp /> +{80} %</span>) :
                                (<span className="text-red-500"><HiTrendingDown /> -{80}%</span>)}
                        </div>

                        <div className="widgetCircle"
                            style={{
                                background: `conic-gradient(
                                purple ${Math.abs(80) / 100 * 360}deg , rgba(255,255,255)0
                            )` }}>

                            {80 > 0 ? (<span className="text-green-500">{80}%</span>) : (<span className="text-green-500">-{80}%</span>)}
                        </div>
                    </article>



                    <article className="widget">
                        <div className="widget-info">
                            <p>Products</p>
                            <h4>{false ? `$${1000}` : 1000}</h4>
                            {30 > 0 ? (<span className="text-green-500"><HiTrendingUp /> +{30} %</span>) :
                                (<span className="text-red-500"><HiTrendingDown /> -{30}%</span>)}
                        </div>
                        <div className="widgetCircle"
                            style={{
                                background: `conic-gradient(
                        aqua ${Math.abs(30) / 100 * 360}deg , rgba(255,255,255)0
                    )` }}>
                            {30 > 0 ? (<span className="text-green-500">{30}%</span>) : (<span className="text-green-500">-{30}%</span>)}
                        </div>
                    </article>
                </section>
                {/*  -------------------------------------------------------------------------------------graphn content */}


                <section className="graphContainer">
                    <div className="revenue-chart">

                        <h2 className="chart-heading">Revenue & Transection</h2>
                        {/*  graphn content */}

                        <Barchart
                            data_1={[200, 444, 343, 556, 778, 455, 990]}
                            data_2={[300, 144, 433, 655, 237, 755, 190]}
                            title_1="Revenue"
                            title_2="Transaction"
                            bgColor_1="rgb(0,115,255)"
                            bgColor_2="rgba(53,162,235,0.8)"
                            label={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                        />

                    </div>

                    <div className="dashboard-categories">
                        <h2 className="inventory-heading">Inventory</h2>
                        <div className="category">
                            {data.categories.map((i) => (
                                <div className="category-item" key={i.heading}>
                                    <h5>{i.heading}</h5>
                                    <div className="categorystyle1">
                                        <div className="categorystyle2" style={{ backgroundColor: `hsl(${i.value * 4},${i.value}%,50%)`, width: `${i.value}%` }}>
                                        </div>
                                    </div>
                                    <span className="category-span">{70}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*  -------------------------------------------------------------------------------------last section content */}

                <section className="transectionContainer">
                    <div className="gender-chart">
                        <h2 className="gender-heading">Gender Ratio</h2>
                        <GenderChart
                            labels={["Female", "Male"]}
                            data={[12, 19]}
                            backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                            cutout={90}
                        />
                        <p className="p"><BiMaleFemale /></p>
                    </div>

                    <div className="transection-chart">
                        <h2 className="transection-heading">Transection</h2>
                        <Table orders={data.transaction} />

                    </div>





                </section>











            </main>
        </div>
    )
}


export default dashboard
