import {
    Dispatch,
    RefObject,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import * as React from 'react';
import {DropBox} from "@/components/tasks/add/DropBox";
import {Button} from "@/components/ui/button";

interface ImageUploaderProps {
    setFormData: Dispatch<SetStateAction<any>>;
    refSubmitButton: RefObject<HTMLButtonElement> | undefined;
    refFormSaveButton: RefObject<HTMLButtonElement> | undefined;
    formData: any;
    setButtonDisabled: (data: boolean) => void;
}

export const ImageUploader = ({
    setFormData,
    refSubmitButton,
    refFormSaveButton,
    formData,
    setButtonDisabled,
}: ImageUploaderProps) => {
    const [coverImage, setCoverImage] = useState('');
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();
    const [image5, setImage5] = useState();
    const [image6, setImage6] = useState();
    const [image7, setImage7] = useState();
    const [image8, setImage8] = useState();
    const [image9, setImage9] = useState();

    useEffect(() => {
        if (coverImage === null) {
            setButtonDisabled(true);
        } else if (image1 === null) {
            setButtonDisabled(true);
        } else if (image2 === null) {
            setButtonDisabled(true);
        } else if (image3 === null) {
            setButtonDisabled(true);
        } else if (image4 === null) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [coverImage, image1, image2, image3, image4, setButtonDisabled]);


    return (
        <div
            className="m-auto w-full max-w-[732px]"
        >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
                type="button"
                onClick={() => {
                    setFormData({
                        ...formData,
                        images: [
                            image1,
                            image2,
                            image3,
                            image4,
                            image5,
                            image6,
                            image7,
                            image8,
                            image9,
                        ],
                        coverImage,
                    });
                }}
                ref={refFormSaveButton}
            />

            <div className="grid grid-cols-8 gap-11 ">
                <div className="col-span-8 w-full items-center ">
                    <DropBox
                        componentWidth={1080}
                        componentHeight={380}
                        setActivityImage={setCoverImage}
                        name="Cover Photo"
                        imageMaxHeight={380}
                        imageMaxWidth={800}
                        initialImage={coverImage}
                    />
                </div>
                {coverImage !== null && (
                    <div className="col-span-8 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out ">
                        <div className="flex w-[50%] flex-col ">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage1}
                                imageMaxWidth={530}
                                imageMaxHeight={280}
                                initialImage={image1}
                            />
                        </div>
                        <div className="flex w-[50%] flex-col">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage2}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image2}
                            />
                        </div>
                    </div>
                )}
                {image1 && image2 && (
                    <div className="col-span-8 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out ">
                        <div className="flex w-[50%] flex-col ">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage3}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image3}
                            />
                        </div>
                        <div className="flex w-[50%] flex-col">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage4}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image4}
                            />
                        </div>
                    </div>
                )}
                {image3 && image4 && (
                    <div className="col-span-8 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out ">
                        <div className="flex w-[50%] flex-col ">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage5}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image5}
                            />
                        </div>
                        <div className="flex w-[50%] flex-col">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage6}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image6}
                            />
                        </div>
                    </div>
                )}
                {image5 && image6 && (
                    <div className="col-span-8 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out ">
                        <div className="flex w-[50%] flex-col ">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage7}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image7}
                            />
                        </div>
                        <div className="flex w-[50%] flex-col">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage8}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image8}
                            />
                        </div>
                    </div>
                )}
                {image7 && image8 && (
                    <div className="col-span-8 flex flex-row justify-between gap-6 transition duration-1000 ease-in-out ">
                        <div className="flex w-[50%] flex-col ">
                            <DropBox
                                componentWidth={530}
                                componentHeight={280}
                                setActivityImage={setImage9}
                                imageMaxHeight={280}
                                imageMaxWidth={530}
                                initialImage={image9}
                            />
                        </div>
                    </div>
                )}
            </div>
            <Button
                className="invisible"
                ref={refSubmitButton}
                onClick={() => {}}
            >
                Click
            </Button>
        </div>
    );
}
