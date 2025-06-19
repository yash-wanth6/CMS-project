import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import userService from '../services/UserService';


export default function DashboardNotes() {
    const { email } = useContext(AuthContext);
    const notes = userService.getNotes(email);
    const [showForm, setShowForm] = React.useState(false);
    const [form, setForm] = React.useState({ title: '', desc: '', content: '' });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleClose = (e) => {
        setShowForm(false);
        setForm({ title: '', desc: '', content: '' });
    };

    const handleSave = () => {
        userService.addNotes(email, form);
        setForm({ title: '', desc: '', content: '' });
        setShowForm(false);
    }

    return (
        <div className="h-[90vh]">
            <h1 className="text-5xl text-left ml-[10%] font-bold">The world of yours</h1>
            <p className="text-xl text-left ml-[10%] mb-8">
                Capture your memories, thoughts, and emotions. This is your personal space, reflect and cherish every moment.
            </p>

            {
                notes.length === 0 ? (
                    <div
                        className="w-4/5 ml-[10%] mb-8 p-8 bg-gray-100 rounded-2xl shadow-md text-left"
                    >
                        <h1 className="text-3xl mb-2 font-semibold">Title</h1>
                        <h3 className="text-xl mb-4 font-medium">Descrption</h3>
                        <p className="text-base py-4 m-0">Write your thoughts here...</p>
                    </div>

                ) : (
                    notes.map((values, index) => {
                        const alignRight = index % 2 !== 0;
                        return (
                            <div
                                key={index}
                                className={`
                                    w-4/5
                                    ${alignRight ? 'ml-auto mr-0 text-right' : 'ml-[10%] mr-0 text-left'}
                                    mb-8 p-8 bg-gray-100 rounded-2xl shadow-md
                                `}
                            >
                                <h1 className="text-3xl mb-2 font-semibold">{values.title}</h1>
                                <h3 className="text-xl mb-4 font-medium">{values.desc}</h3>
                                <p className="text-base py-4 m-0">{values.content}</p>
                            </div>
                        );
                    })
                )
            }
            <button
                className="ml-[10%] px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
                onClick={handleAddClick}
            >
                Add
            </button>

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-40 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Add Note</h2>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleInputChange}
                            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="desc"
                            placeholder="Description"
                            value={form.desc}
                            onChange={handleInputChange}
                            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <textarea
                            name="content"
                            placeholder="Content"
                            value={form.content}
                            onChange={handleInputChange}
                            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={4}
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                onClick={handleSave} // Implement save logic as needed
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
