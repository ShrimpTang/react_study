import React from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors})=>{
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>
            <TextInput
                name="category"
                label="category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />
            <TextInput
                name="length"
                label="length"
                value={course.f_length}
                onChange={onChange}
                error={errors.f_length}
            />
            <input
                type="submit"
                disabled={loading}
                value={loading?'Saveing...':'Save'}
                className='btn btn-primary'
                onClick={onSave}/>
        </form>
    )
}

export  default CourseForm