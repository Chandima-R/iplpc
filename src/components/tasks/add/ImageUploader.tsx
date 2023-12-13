import {
    Dispatch,
    RefObject,
    SetStateAction,
    useState,
} from 'react';
import * as React from 'react';
import { DropBox } from "@/components/tasks/add/DropBox";
import { Button } from "@/components/ui/button";
import { TaskData } from "@/components/types";
import { XCircle } from 'lucide-react';

interface ImageUploaderProps {
    setFormData: Dispatch<SetStateAction<TaskData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
    formData: TaskData;
    setButtonDisabled: (data: boolean) => void;
    name?: string;
}

export const ImageUploader = ({
  setFormData,
  refSubmitButton,
  refFormSaveButton,
  formData,
}: ImageUploaderProps) => {
    const [images, setImages] = useState<string[]>(['']);
    const handleImageChange = (index: number, image: string) => {
        const updatedImages = [...images];
        updatedImages[index] = image;
        setImages(updatedImages);
    };

    const addImageUploadBox = () => {
        setImages([...images, '']);
    };

    // Determine whether to show the Dropbox or "Add Image" button
    const showDropbox = images.length === 0;


    // @ts-ignore
    return (
        <div className="m-auto w-full">
            <button
                type="button"
                onClick={() => {
                    setFormData({
                        ...formData,
                        photo: [...images],
                    });
                }}
                ref={refFormSaveButton}
            />

            <div className="grid grid-cols-1 gap-2 h-[300px] overflow-y-auto">
                {showDropbox ? (
                    <div className="relative col-span-2 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out">
                        <div className="flex w-full flex-col">
                            <DropBox
                                setActivityImage={(newImage) =>
                                    handleImageChange(0, '')
                                }
                                initialImage={images[0]}
                            />
                        </div>
                    </div>
                ) : (
                    images.map((image, index) => (
                        <div
                            key={index}
                            className="relative col-span-2 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out"
                        >
                            <div className="flex w-full flex-col">
                                <DropBox
                                    setActivityImage={(newImage) =>
                                        handleImageChange(index, '')
                                    }
                                    initialImage={image}
                                />
                            </div>
                            <div
                                className={
                                    'cursor-pointer absolute top-4 right-4 bg-white rounded-full p-2 border-none'
                                }
                                onClick={() => {
                                    const updatedImages = [...images];
                                    updatedImages.splice(index, 1);
                                    setImages(updatedImages);
                                }}
                            >
                                <XCircle className={'w-6 h-6 text-slate-900'} />
                            </div>
                        </div>
                    ))
                )}

                {/* Conditionally render the "Add Image" button */}
                {showDropbox || (
                    <div className="w-full items-center justify-center flex">
                        <Button type="button" onClick={addImageUploadBox}>
                            Add Image
                        </Button>
                    </div>
                )}
            </div>

            {/* Submit button */}
            <Button className="invisible" ref={refSubmitButton} onClick={() => {}}>
                submit
            </Button>
        </div>
    );
};
